import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Julio</Text>
          <Text color="gray.300" fontSize="small">
            julio@mail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Júlio César"
        src="https://github.com/juliosouzam.png"
      />
    </Flex>
  );
}
