import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} p={10} spacing={10}>
        {isLoding && skeletons.map(skeletons => <GameCardSkeleton key={skeletons}/>)}
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
