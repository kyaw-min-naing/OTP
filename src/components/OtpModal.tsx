import { useState, useEffect } from "react";
import { Modal, Text, Group, Button, TextInput, Stack } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useCounter } from "@mantine/hooks";

interface OTPVerificationProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  phoneNumber: string;
}

export default function OTPVerification({
  isOpen,
  onClose,
  onVerify,
  phoneNumber,
}: OTPVerificationProps) {
  const [otpValue, setOtpValue] = useState("");
  const [count, { decrement, reset }] = useCounter(59, { min: 0, max: 59 });

  useEffect(() => {
    if (!isOpen) return;

    reset();
    setOtpValue("");

    const timer = setInterval(() => {
      decrement();
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, reset, decrement]);

  const handleVerify = () => {
    onVerify(otpValue);
    setOtpValue("");
  };

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;

  const maskedPhone = phoneNumber.replace(/(\d{5})(\d+)(\d{4})/, "$1*****$3");

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      centered
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.7 }}
      radius="lg"
      size="sm"
    >
      <Stack gap="lg" p="md">
        <Group justify="space-between">
          <Text fw={600} size="lg" c="#1565c0">
            OTP Verification
          </Text>
          <Button variant="subtle" size="xs" p={4} onClick={onClose} c="dimmed">
            <IconX size={16} />
          </Button>
        </Group>

        <Text size="sm" c="dimmed">
          Check your SMS, we have sent you the verification code at{" "}
          {maskedPhone}.
        </Text>

        <TextInput
          label="Enter OTP"
          placeholder="Enter OTP"
          value={otpValue}
          onChange={(e) => setOtpValue(e.target.value)}
          size="md"
        />

        <Text size="sm" c="dimmed">
          Resend OTP in {formatTime(count)} sec
        </Text>

        <Button fullWidth size="md" onClick={handleVerify}>
          Verify
        </Button>
      </Stack>
    </Modal>
  );
}
