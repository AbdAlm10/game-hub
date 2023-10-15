import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav" bg={"red.300"}>
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"blue.300"}>
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg={"yellow.300"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
