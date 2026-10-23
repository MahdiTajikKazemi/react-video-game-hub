import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQeury, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQeury.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQeury, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQeury} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQeury.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQeury, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              selectedSortOrder={gameQeury.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQeury, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQeury} />
      </GridItem>
    </Grid>
  );
}

export default App;
