import { Box, Container, Text } from "@mantine/core";

export default function Header() {
  return (
    <Box h="15vh" bg="linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)">
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
      ].map((pos, idx) => (
        <Box
          key={idx}
          pos="absolute"
          {...pos}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 8px)",
            gap: 8,
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <Box
              key={i}
              w={4}
              h={4}
              bg="rgba(255, 255, 255, 0.95)"
              style={{ borderRadius: "50%" }}
            />
          ))}
        </Box>
      ))}

      <Container
        size="sm"
        h="100%"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          c="white"
          fz={{ base: "lg", sm: "xl", md: "xl" }}
          fw={600}
          ta="center"
        >
          Mobile Top up
        </Text>
      </Container>
    </Box>
  );
}
