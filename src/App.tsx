import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformsSelector from "./components/PlatformsSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selecteGenres, setSelectedGenres] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1rf",
        lg: "260px 3fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selecteGenres}
            onSelectedGenres={(genre) => setSelectedGenres(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformsSelector
        selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selecteGenres} />
      </GridItem>
    </Grid>
  );
}

export default App;
