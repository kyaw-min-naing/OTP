import { Box, Container, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 1240px)");

  return (
    <Box h="20vh" bg="linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)">
      {[
        { top: 20, left: 30 },
        { top: 20, right: 30 },
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
              bg="rgba(255, 255, 255, 0.9)"
              style={{ borderRadius: "50%" }}
            />
          ))}
        </Box>
      ))}

      <Container
        size="lg"
        py="md"
        px="lg"
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        <Text c="white" fz="xl" fw={600} size="lg">
          Mobile Top up
        </Text>
      </Container>
    </Box>
  );
}
