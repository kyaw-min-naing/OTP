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
import Header from "./Header";

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
    <Box h="100vh" bg="#f0f0f0" style={{ overflow: "auto" }}>
      <Header />
      <Container
        size="lg"
        mt={-85}
        // p={20}
        px={{ base: "md", sm: "sm" }}
      >
        <Paper radius="lg" shadow="lg" p="sm" pt={24} mt={0}>
          <Box bg="#e3f2fd" p="sm" m="sm">
            <Text c="#1565c0" fw={500} ta="center">
              Confirm transaction details
            </Text>
          </Box>

          <Stack gap="lg" p="xl" pt={0}>
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

            <Group justify="end" gap="md" mt="170px">
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
