# use-basicscroll
[![use-basicscroll](https://img.shields.io/npm/v/use-basicscroll)](https://www.npmjs.com/package/use-basicscroll)

Simple React hook to add [basicscroll](https://www.npmjs.com/package/basicscroll#demos) to your React project.

## Installation

Install `use-basicscroll` and `basicscroll` itself.

```
yarn add use-basicscroll basicscroll
```

## Usage

Use the hook with a ref and basic scroll config

```jsx
import { useBasicScroll } from "use-basicscroll";

export const Component = () => {
  const ref = useRef();
  const instance = useBasicScroll(ref, {
    from: '0',
    to: '100px',
    props: {
      '--opacity': {
        from: 0,
        to: 1,
      },
    },
  });

  return (
    <div ref={ref}></div>
  )
};
```
