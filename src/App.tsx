import { useDisclosure } from "@mantine/hooks";
import OTPVerification from "../src/components/OtpModal";
import ConfirmationTransaction from "../src/components/ConfirmTransaction";

const TRANSACTION_DATA = {
  topUpNumber: "09420033486",
  operator: "MPT",
  package: "E-load",
  amount: "1,000 Ks",
  fees: "Free",
  total: "1,000 Ks",
};

export default function App() {
  const [otpOpened, { open: openOtp, close: closeOtp }] = useDisclosure(false);

  const handleOTPVerify = (otp: string) => {
    console.log("Verifying OTP:", otp);
    closeOtp();
  };

  return (
    <>
      <ConfirmationTransaction
        transactionData={TRANSACTION_DATA}
        onNext={openOtp}
        onBack={() => console.log("Back clicked")}
      />

      <OTPVerification
        isOpen={otpOpened}
        onClose={closeOtp}
        onVerify={handleOTPVerify}
        phoneNumber={TRANSACTION_DATA.topUpNumber}
      />
    </>
  );
}
