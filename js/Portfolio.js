
<script>
  // Function to handle the dropdown change event
  function goToArtstation() {
    // Get the selected value from the "github-artsation" dropdown
    const selectedValue = document.querySelector('select[name="github-artsation"]').value;

    // If the selected value is "artsation", redirect to your Artstation page
    if (selectedValue === "artsation") {
      window.location.href = "https://www.artstation.com/your_artstation_username";
    }
  }

  // Add event listener to the dropdown to trigger the goToArtstation function on change
  document.querySelector('select[name="github-artsation"]').addEventListener('change', goToArtstation);
</script>