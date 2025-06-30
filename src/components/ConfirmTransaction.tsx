import {
  Container,
  Paper,
  Text,
  Group,
  Button,
  Stack,
  Box,
  Divider,
} from "@mantine/core";

interface TransactionData {
  topUpNumber: string;
  operator: string;
  package: string;
  amount: string;
  fees: string;
  total: string;
}

interface TransactionConfirmationProps {
  transactionData: TransactionData;
  onNext: () => void;
  onBack: () => void;
}

export default function ConfirmationTransaction({
  transactionData,
  onNext,
  onBack,
}: TransactionConfirmationProps) {
  const transactionItems = [
    { label: "Top Up Number", value: transactionData.topUpNumber },
    { label: "Operator", value: transactionData.operator },
    { label: "Package", value: transactionData.package },
    { label: "Amount", value: transactionData.amount },
    { label: "Fees & Charges", value: transactionData.fees, color: "green" },
  ];

  return (
    <Box h="20vh" bg="linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)">
      {/* Decorative dots */}
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
          {Array.from({ length: 20 }).map((_, i) => (
            <Box
              key={i}
              w={4}
              h={4}
              bg="rgb(255, 255, 255)"
              style={{ borderRadius: "50%" }}
            />
          ))}
        </Box>
      ))}

      <Container size="lg" p={20}>
        <Text c="white" size="xl" fw={600} mb={30} ta="center">
          Mobile Top up
        </Text>

        <Paper radius="lg" shadow="lg">
          <Box bg="#e3f2fd" p="md" style={{ borderRadius: "12px 12px 0 0" }}>
            <Text c="#1565c0" fw={500} ta="center">
              Confirm transaction details
            </Text>
          </Box>

          <Stack gap="lg" p="xl">
            {transactionItems.map((item, idx) => (
              <Group key={idx} justify="space-between">
                <Text c="dimmed" size="sm">
                  {item.label}
                </Text>
                <Text fw={500} c={item.color}>
                  {item.value}
                </Text>
              </Group>
            ))}

            <Divider />

            <Group justify="space-between">
              <Text fw={600}>Total</Text>
              <Text c="#1565c0" fw={700} size="lg">
                {transactionData.total}
              </Text>
            </Group>

            <Group justify="end" gap="md" mt="170">
              <Button variant="light" size="md" px="xl" onClick={onBack}>
                Back
              </Button>
              <Button size="md" px="xl" onClick={onNext}>
                Next
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
