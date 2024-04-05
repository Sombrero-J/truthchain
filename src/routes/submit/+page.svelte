<script>
  import InputField from "../../lib/inputField.svelte";
  import TcButton from "../../lib/tcButton.svelte";
</script>

  <InputField
    title="Thumbnail Field"
    description="The thumbnail must be relevant to your topic."
    inputType="image"
  />
  <InputField
    title="Content Field"
    description="Your content must obey the rules written in the content rules section."
    inputType="text"
  />
  <InputField
    title="Title Field"
    description="To prevent misleading, exaggeration behaviours and more, truthchain will generate multiple appropriate titles as your options, based on your content."
    inputType="buttonInput"
  >
    <TcButton text="Generate Titles" />
  </InputField>