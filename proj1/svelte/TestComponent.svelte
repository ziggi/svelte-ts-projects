<script lang="ts">
  import { TestSharedValue } from '@shared/SharedTest';
  
  console.log('TestComponent.svelte TestSharedValue', TestSharedValue);
</script>

<div>
  TestSharedValue = {TestSharedValue}
</div>
