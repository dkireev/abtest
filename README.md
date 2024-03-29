[![npm (scoped)](https://img.shields.io/npm/v/optimize-abtest.svg)](https://www.npmjs.com/package/optimize-abtest)

# Use optimize-abtest in code

1. Install `npm i optimize-abtest` or `yarn add optimize-abtest`
2. Import `import useAbTest from 'optimize-abtest'`
3. Use `const { variant } = useAbTest('<yourAbTestName>');` to compare with string `variant1` or `variant2`
4. Or simply use `const { isExperienceActive } = useAbTest('<yourAbTestName>');` if there's only 1 variant available

# Set up Google Optimize experiment

1. Create a new experiment
2. Add a variant to it
3. Edit Global JavaScript in the variant
4. Add the next two lines of code listed below:

```
window.dispatchEvent(new CustomEvent('<yourAbTestName>', {detail: 'variant1'}));
document.cookie = "<yourAbTestName>=variant1";
```

## A bit of explanation here

The package uses a session-long cookie named `<yourAbTestName>` and one of its corresponding values either `variant1` or `variant2`. `const { variant } = useAbTest('<yourAbTestName>');` returns one of the strings either `variant1` or `variant2`.
Alternatively, you can import a boolean `isExperienceActive` witch return either `variant1` is active or not.
