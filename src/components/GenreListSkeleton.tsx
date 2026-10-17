import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {Array.from({ length: 15 }).map((_, index) => (
        <ListItem key={index} paddingY="5px">
          <HStack spacing={3}>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText noOfLines={1} width="120px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
