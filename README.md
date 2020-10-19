# TACC Website STEM Tables

This project compiles data into templates to create __some__ markup (only list items) for the body of the [REU Alumni Page][reu-alumni].

[reu-alumni]: https://www.tacc.utexas.edu/reu/alumni "TACC: REU: Alumni Page(s)"

## Usage

1. Edit templates and data in:
    - `templates/`
    - `assets/`
2. (If not already done) Install dependencies:
    - `npm ci` (a.k.a. `rm -rf node_modules && npm install`)
3. Run build script:
    - `npm run build`
4. Confirm output in:
    - `dist/`
5. Use output.

## Reference

- [How To - Legacy TACC - Markup Generation Utility](https://confluence.tacc.utexas.edu/x/AYGDC)
