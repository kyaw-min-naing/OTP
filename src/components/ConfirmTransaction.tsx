import {
  Container,
  Paper,
  Text,
  Group,
  Button,
  Stack,
  Box,
  Flex,
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
      <Container size="lg" mt={-70} px={{ base: "md", sm: "sm" }}>
        <Paper radius="lg" shadow="lg" p="xs" pt={24} mt={0}>
          <Box bg="#e3f2fd" p="xs" m="xs">
            <Text c="#1565c0" fw={500} ta="center">
              Confirm transaction details
            </Text>
          </Box>

          <Stack gap="xl" p="xl" pt={20} align="center" ml="100px">
            <Box w="100%" maw={500}>
              {transactionItems.map((item, idx) => (
                <Flex
                  key={idx}
                  justify="space-between"
                  align="flex-start"
                  mb="md"
                >
                  <Text
                    c="dimmed"
                    size="sm"
                    fz={{ base: "sm", sm: "md" }}
                    style={{ flex: "0 0 45%" }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    fw={500}
                    c={item.color || "#374151"}
                    fz={{ base: "sm", sm: "md" }}
                    style={{ flex: "0 0 55%", textAlign: "left" }}
                  >
                    {item.value}
                  </Text>
                </Flex>
              ))}

              <Box mt="md" pt="md">
                <Flex justify="space-between" align="center">
                  <Text c="dimmed">Total</Text>
                  <Text
                    c="#1565c0"
                    fw={700}
                    fz={{ base: "lg", sm: "xl" }}
                    style={{ flex: "0 0 55%", textAlign: "left" }}
                  >
                    {transactionData.total}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Stack>
          <Group justify="end" gap="md" mt="150" p="30">
            <Button variant="light" size="sm" px="xl" onClick={onBack}>
              Back
            </Button>
            <Button size="sm" px="xl" onClick={onNext}>
              Next
            </Button>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}
