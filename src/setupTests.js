/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

let localStorageMock;
// const localStorageMock = (function () {
//     let store = {};
//     return {
//         getItem: function (key) {
//             return store[key] || null;
//         },
//         setItem: function (key, value) {
//             store[key] = value.toString();
//         },
//         clear: function () {
//             store = {};
//         }
//     };
// })();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
