import { TestSharedValue } from '@shared/SharedTest';
import TestComponent from './svelte/TestComponent.svelte';

console.log('index.ts TestSharedValue', TestSharedValue);

new TestComponent({
  target: document.body,
});
