"use client";

/** [ISO, country, dial code, min digits, max digits] — national number length, without the trunk 0. */
export const COUNTRIES: [string, string, string, number, number][] = [
  ["IN", "India", "+91", 10, 10],
  ["US", "United States", "+1", 10, 10],
  ["CA", "Canada", "+1", 10, 10],
  ["GB", "United Kingdom", "+44", 10, 10],
  ["AE", "United Arab Emirates", "+971", 9, 9],
  ["SA", "Saudi Arabia", "+966", 9, 9],
  ["QA", "Qatar", "+974", 8, 8],
  ["KW", "Kuwait", "+965", 8, 8],
  ["OM", "Oman", "+968", 8, 8],
  ["BH", "Bahrain", "+973", 8, 8],
  ["SG", "Singapore", "+65", 8, 8],
  ["MY", "Malaysia", "+60", 9, 10],
  ["ID", "Indonesia", "+62", 9, 12],
  ["TH", "Thailand", "+66", 9, 9],
  ["PH", "Philippines", "+63", 10, 10],
  ["VN", "Vietnam", "+84", 9, 10],
  ["HK", "Hong Kong", "+852", 8, 8],
  ["CN", "China", "+86", 11, 11],
  ["JP", "Japan", "+81", 10, 10],
  ["KR", "South Korea", "+82", 9, 10],
  ["AU", "Australia", "+61", 9, 9],
  ["NZ", "New Zealand", "+64", 8, 10],
  ["BD", "Bangladesh", "+880", 10, 10],
  ["LK", "Sri Lanka", "+94", 9, 9],
  ["NP", "Nepal", "+977", 10, 10],
  ["PK", "Pakistan", "+92", 10, 10],
  ["DE", "Germany", "+49", 10, 11],
  ["FR", "France", "+33", 9, 9],
  ["NL", "Netherlands", "+31", 9, 9],
  ["BE", "Belgium", "+32", 8, 9],
  ["CH", "Switzerland", "+41", 9, 9],
  ["AT", "Austria", "+43", 10, 13],
  ["IE", "Ireland", "+353", 9, 9],
  ["ES", "Spain", "+34", 9, 9],
  ["PT", "Portugal", "+351", 9, 9],
  ["IT", "Italy", "+39", 9, 10],
  ["SE", "Sweden", "+46", 7, 9],
  ["NO", "Norway", "+47", 8, 8],
  ["DK", "Denmark", "+45", 8, 8],
  ["FI", "Finland", "+358", 9, 10],
  ["PL", "Poland", "+48", 9, 9],
  ["CZ", "Czechia", "+420", 9, 9],
  ["GR", "Greece", "+30", 10, 10],
  ["TR", "Türkiye", "+90", 10, 10],
  ["IL", "Israel", "+972", 9, 9],
  ["EG", "Egypt", "+20", 10, 10],
  ["ZA", "South Africa", "+27", 9, 9],
  ["NG", "Nigeria", "+234", 10, 10],
  ["KE", "Kenya", "+254", 9, 9],
  ["BR", "Brazil", "+55", 10, 11],
  ["MX", "Mexico", "+52", 10, 10],
  ["AR", "Argentina", "+54", 10, 10],
  ["CL", "Chile", "+56", 9, 9],
  ["CO", "Colombia", "+57", 10, 10],
  ["RU", "Russia", "+7", 10, 10],
];

/** Validates the phone parts in a FormData. Returns an error message, or "" if valid. */
export function phoneError(f: FormData, name = "phone", required = true): string {
  const iso = String(f.get(`${name}_country`) ?? "IN");
  const raw = String(f.get(name) ?? "").trim();
  if (!raw) return required ? "Phone number is required." : "";
  if (/[^\d\s()+-]/.test(raw)) return "Use digits only, like 98765 43210.";
  const c = COUNTRIES.find((x) => x[0] === iso) ?? COUNTRIES[0];
  const digits = raw.replace(/\D/g, "").replace(/^0+/, "");
  if (digits.length < c[3] || digits.length > c[4]) {
    const n = c[3] === c[4] ? `${c[3]}` : `${c[3]}–${c[4]}`;
    return `${c[1]} numbers have ${n} digits after ${c[2]}.`;
  }
  return "";
}

/** The full number, e.g. "+91 98765 43210". */
export function phoneValue(f: FormData, name = "phone"): string {
  const raw = String(f.get(name) ?? "").trim();
  if (!raw) return "";
  const c = COUNTRIES.find((x) => x[0] === String(f.get(`${name}_country`))) ?? COUNTRIES[0];
  return `${c[2]} ${raw.replace(/^0+/, "")}`;
}

/** Country-code selector + national number input, styled like the site's other fields. */
export function PhoneField({
  id = "phone",
  name = "phone",
  label = "Phone Number",
  required = true,
  error,
  inputClass,
}: {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  error?: string;
  /** Base class for inputs (without border colour). */
  inputClass: string;
}) {
  const border = error ? "border-danger" : "border-line";
  const base = inputClass.replace(/w-full/, "");
  return (
    <div className="text-sm font-medium">
      <label htmlFor={id}>
        {label}
        {required && <span className="text-danger" aria-hidden> *</span>}
      </label>
      <div className="flex gap-2">
        <select name={`${name}_country`} aria-label="Country code" autoComplete="tel-country-code" defaultValue="IN" className={`${base} ${border} w-[6.25rem] shrink-0 !pr-1 sm:w-[7.5rem] sm:!pr-2`}>
          {COUNTRIES.map(([iso, country, dial]) => (
            <option key={iso} value={iso} title={country}>
              {iso} {dial}
            </option>
          ))}
        </select>
        <input
          id={id}
          name={name}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          required={required}
          placeholder="98765 43210"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
          className={`${base} ${border} w-full min-w-0 flex-1`}
        />
      </div>
      {error && <p id={`${id}-err`} className="mt-1.5 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}
