# A virtual Combobox opens empty with @tanstack/virtual-core 3.19.6 or later

`src/App.jsx` is the "Virtual scrolling" example from <https://headlessui.com/react/combobox>, unchanged except for 1,000 generated people.

1. Run `npm install`, then `npm run dev`.
2. Click the input and press the down arrow key. The input reports `aria-expanded="true"`, but the options panel holds no options, and `empty:invisible` hides it.

`package.json` overrides `@tanstack/react-virtual` to 3.14.23, which uses `@tanstack/virtual-core` 3.19.8. The `^3.13.9` range of `@headlessui/react` 2.2.10 admits it. To see the panel work, set the override to `3.14.20` (`virtual-core` 3.19.5), run `npm install`, and restart `npm run dev`.
