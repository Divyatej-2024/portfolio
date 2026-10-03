"""Build an accurate public index from the first page of each public certificate PDF.

Requires pypdf for this one-off maintenance command; it is not a website runtime dependency.
Sensitive transcripts are deliberately excluded.
"""

from datetime import datetime
import json
from pathlib import Path
import re

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "public" / "certifications"
OUTPUT = ROOT / "data" / "certification-content.json"


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def parse_date(value: str) -> tuple[str, str]:
    value = re.sub(r"(\d+)(st|nd|rd|th)", r"\1", value, flags=re.I).replace(",", "")
    for pattern in ("%B %d %Y", "%d %B %Y"):
        try:
            parsed = datetime.strptime(value, pattern)
            return parsed.strftime("%d %b %Y"), parsed.strftime("%Y-%m-%d")
        except ValueError:
            pass
    return "Date not listed", ""


def read_entry(file: Path) -> dict:
    text = clean(PdfReader(str(file)).pages[0].extract_text() or "")
    entry = {
        "id": file.name,
        "fileName": file.name,
        "title": "",
        "provider": "Credential provider not identified",
        "providerTag": "Credential",
        "category": "Certificate",
        "date": "Date not listed",
        "dateISO": "",
        "credentialId": "",
        "skills": [],
        "tags": [],
    }

    forage = re.search(
        r"DIVYA TEJ PENDELA\s+(.*?)\s+Certificate of Completion\s+"
        r"([A-Z][a-z]+\s+\d{1,2}(?:st|nd|rd|th)?,?\s+\d{4})",
        text,
        flags=re.I,
    )
    company = re.search(
        r"^[A-Za-z0-9]+_(.*?)_xJSz3nStzBg8FTBLH_\d{13}_completion_certificate\.pdf$",
        file.name,
        flags=re.I,
    )
    if forage:
        title = clean(forage.group(1))
        date, date_iso = parse_date(forage.group(2))
        partner = clean(company.group(1)).replace("_", " ") if company else ""
        known_partners = {
            "aig", "clifford chance", "hsbc", "pwc switzerland",
            "jpmorgan chase & co.", "anz australia", "mastercard",
            "commonwealth bank", "datacom",
        }
        if partner.casefold() not in known_partners:
            partner = ""
        entry.update(
            title=title,
            provider=f"Forage · {partner}" if partner else "Forage",
            providerTag="Forage",
            category="Job simulation",
            date=date,
            dateISO=date_iso,
            tags=["Forage", partner] if partner else ["Forage"],
        )
        return entry

    microsoft = re.search(
        r"has successfully completed\s+(.*?)\s+(\d{1,2}\s+[A-Z][a-z]+\s+\d{4})",
        text,
        flags=re.I,
    )
    if microsoft:
        date, date_iso = parse_date(microsoft.group(2))
        entry.update(
            title=clean(microsoft.group(1)),
            provider="Microsoft Learn",
            providerTag="Microsoft Learn",
            category="Learning achievement",
            date=date,
            dateISO=date_iso,
            tags=["Microsoft Learn"],
        )
        return entry

    course = re.search(
        r"understanding of\s+(.*?)\s+Certificate\s+([A-Z]{2}-[A-Z0-9]+)\s+Issued\s+(\d{1,2}\s+[A-Z][a-z]+,?\s+\d{4})",
        text,
        flags=re.I,
    )
    if course:
        date, date_iso = parse_date(course.group(3))
        title = clean(course.group(1)).replace("HTM L", "HTML").replace("Interm ediate", "Intermediate")
        entry.update(
            title=title,
            provider="SoloLearn",
            providerTag="SoloLearn",
            category="Course certificate",
            date=date,
            dateISO=date_iso,
            credentialId=course.group(2),
            tags=["SoloLearn"],
        )
        return entry

    # A conservative readable fallback for an unrecognised PDF; never expose hash-like
    # filename prefixes as a credential title.
    entry["title"] = file.stem.replace("_", " ").replace("-", " ").strip()
    return entry


entries = [
    read_entry(file)
    for file in sorted(PDF_DIR.glob("*.pdf"), key=lambda item: item.name.lower())
    if not re.search(r"transcript|academic", file.name, flags=re.I)
]
OUTPUT.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Indexed {len(entries)} public certificates and learning achievements.")
unparsed = [entry["fileName"] for entry in entries if entry["provider"] == "Credential provider not identified"]
if unparsed:
    print("Review provider/title extraction for:")
    print("\n".join(unparsed))
