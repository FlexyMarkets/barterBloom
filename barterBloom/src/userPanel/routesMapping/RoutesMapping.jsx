import { lazy } from "react";

const Profile = lazy(() => import("../pages/settings/profile/Profile"));
const WalletAddress = lazy(() => import("../pages/settings/walletAddress/WalletAddress"));
// const BankKYC = lazy(() => import("../pages/settings/bankKYC/BankKYC"));
const SetTransactionPassword = lazy(() => import("../pages/settings/setTransactionPassword/SetTransactionPassword"));
const DirectTeam = lazy(() => import("../pages/network/directTeam/DirectTeam"));
const AllTeam = lazy(() => import("../pages/network/allTeam/AllTeam"));
const UniLevel = lazy(() => import("../pages/network/uniLevel/UniLevel"));
const BusinessHistory = lazy(() => import("../pages/network/businessHistory/BusinessHistory"));
const LevelIncome = lazy(() => import("../pages/income/levelIncome/LevelIncome"));
const MatchingIncome = lazy(() => import("../pages/income/matchingIncome/MatchingIncome"));
const StackingMatchingIncome = lazy(() => import("../pages/income/stackingMatchingIncome/StackingMatchingIncome"));
const IBIncome = lazy(() => import("../pages/income/IBIncome/IBIncome"));
const AchievementIncome = lazy(() => import("../pages/income/achievementIncome/AchievementIncome"));
const CompoundingIncome = lazy(() => import("../pages/income/compoundingIncome/CompoundingIncome"));
const RewardIncome = lazy(() => import("../pages/income/rewardIncome/RewardIncome"));
const ClubIncome = lazy(() => import("../pages/income/clubIncome/ClubIncome"));
const TradingProfitIncome = lazy(() => import("../pages/income/tradingProfitIncome/TradingProfitIncome"));
const TradingLevelIncome = lazy(() => import("../pages/income/tradingLevelIncome/TradingLevelIncome"));
const CompoundingProfitIncome = lazy(() => import("../pages/income/compoundingProfitIncome/CompoundingProfitIncome"));
const GiftTLCProfit = lazy(() => import("../pages/income/giftTLCProfit/GiftTLCProfit"));
const GiftDirectTLCProfit = lazy(() => import("../pages/income/giftDirectTLCProfit/GiftDirectTLCProfit"));
const TradingRobot = lazy(() => import("../pages/robot/tradingRobot/TradingRobot"));
const RenewalRobot = lazy(() => import("../pages/robot/renewalRobot/RenewalRobot"));
const Investment = lazy(() => import("../pages/robot/investment/Investment"));
const Portfolio = lazy(() => import("../pages/robot/portfolio/Portfolio"));
const TradingToCompounding = lazy(() => import("../pages/robot/portfolio/tradingPortfolio/TradingToCompounding/TradingToCompounding"));
const StakingInTLC = lazy(() => import("../pages/staking/stakingInTLC/StakingInTLC"));
const StakingIncome = lazy(() => import("../pages/staking/stakingIncome/StakingIncome"));
// const TLCTwoPointOICO = lazy(() => import("../pages/TLCTwoPointO/TLCTwoPointOICO/TLCTwoPointOICO"));
// const TLCTwoPointOICOLevelIncome = lazy(() => import("../pages/TLCTwoPointO/TLCTwoPointOICOLevelIncome/TLCTwoPointOICOLevelIncome"));
// const TLCTwoPointOLevelIncome = lazy(() => import("../pages/TLCTwoPointO/TLCTwoPointOLevelIncome/TLCTwoPointOLevelIncomeTotal"));
// const TLCTwoPointOProfit = lazy(() => import("../pages/TLCTwoPointO/TLCTwoPointOProfit/TLCTwoPointOProfit"));
const DepositCrypto = lazy(() => import("../pages/deposit/depositCrypto/DepositCrypto"));
const DepositINRPackage = lazy(() => import("../pages/deposit/depositINRPackage/DepositINRPackage"));
const DepositInvoices = lazy(() => import("../pages/deposit/depositInvoices/DepositInvoices"));
const DepositInvoicesCrypto = lazy(() => import("../pages/deposit/depositInvoicesCrypto/DepositInvoicesCrypto"));
const DepositInvoicesINR = lazy(() => import("../pages/deposit/depositInvoicesINR/DepositInvoicesINR"));
const DepositViaGateway = lazy(() => import("../pages/deposit/depositViaGateway/DepositViaGateway"));
const TransferToPackageWallet = lazy(() => import("../pages/transfer/transferToPackageWallet/TransferToPackageWallet"));
const TransferTLCGiftNew = lazy(() => import("../pages/transfer/transferTLCGiftNew/TransferTLCGiftNew"));
const TransferTLCTwoPointORedeemWallet = lazy(() => import("../pages/transfer/transferTLCTwoPointORedeemWallet/TransferTLCTwoPointORedeemWallet"));
const TransferToTLCPackageWallet = lazy(() => import("../pages/transfer/transferToTLCPackageWallet/TransferToTLCPackageWallet"));
const TransferReport = lazy(() => import("../pages/transfer/transferReport/TransferReport"));
const ReceiveReport = lazy(() => import("../pages/transfer/receiveReport/ReceiveReport"));
const SellTLC = lazy(() => import("../pages/buySell/sellTLC/SellTLC"));
const BuySellReport = lazy(() => import("../pages/buySell/buySellReport/BuySellReport"));
// const WithdrawalAmountUSDT = lazy(() => import("../pages/Financial/withdrawalAmountUSDT/WithdrawalAmountUSDT"));
const WithdrawalAmountCRYPTOforIndians = lazy(() => import("../pages/Financial/withdrawalAmountCRYPTOforIndians/WithdrawalAmountCRYPTOforIndians"));
// const WithdrawalAmountINR = lazy(() => import("../pages/Financial/withdrawalAmountINR/WithdrawalAmountINR"));
// const WithdrawalTradingUSDT = lazy(() => import("../pages/Financial/withdrawalTradingUSDT/WithdrawalTradingUSDT"));
const WithdrawalTradingCRYPTO = lazy(() => import("../pages/Financial/withdrawalTradingCRYPTO/WithdrawalTradingCRYPTO"));
// const WithdrawalTradingINR = lazy(() => import("../pages/Financial/withdrawalTradingINR/WithdrawalTradingINR"));
const WithdrawalReport = lazy(() => import("../pages/Financial/withdrawalReport/WithdrawalReport"));
const AccountStatement = lazy(() => import("../pages/Financial/accountStatement/AccountStatement"));
const IncomeSummary = lazy(() => import("../pages/Financial/incomeSummary/IncomeSummary"));
const WalletHistory = lazy(() => import("../pages/Financial/walletHistory/WalletHistory"));
const Reward = lazy(() => import("../pages/reward/Reward"));
const Support = lazy(() => import("../pages/support/Support"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const TransactionList = lazy(() => import("../pages/transaction/TransactionList"));
const Referral = lazy(() => import("../pages/referral/Referral"))
const ReferralList = lazy(() => import("../pages/network/directTeam/referralList/ReferralList"))
const Trade = lazy(() => import("../pages/trade/Trade"));
const Swap = lazy(() => import("../pages/deposit/swap/Swap"));
const ConvertWallet = lazy(() => import("../pages/deposit/convertWallet/ConvertWallet"));
const TransferFund = lazy(() => import("../pages/deposit/transferFund/TransferFund"));
const WithdrawAmount = lazy(() => import("../pages/deposit/withdrawAmount/WithdrawAmount"));


export const routing = [
    { path: "", element: <Dashboard /> },
    { path: "setting/profile", element: <Profile /> },
    { path: "setting/wallet-address", element: <WalletAddress /> },
    // { path: "setting/bank-KYC", element: <BankKYC /> },
    { path: "setting/set-transaction-password", element: <SetTransactionPassword /> },
    { path: "network/networkList", element: <DirectTeam /> },
    { path: "network/referralList", element: <ReferralList /> },
    { path: "network/all-team", element: <AllTeam /> },
    { path: "network/unilevel", element: <UniLevel /> },
    { path: "trade", element: <Trade /> },
    { path: "network/business-history", element: <BusinessHistory /> },
    { path: "income/level-income", element: <LevelIncome /> },
    { path: "income/matching-income", element: <MatchingIncome /> },
    { path: "income/staking-matching-income", element: <StackingMatchingIncome /> },
    { path: "income/IB-income", element: <IBIncome /> },
    { path: "income/achievement-income", element: <AchievementIncome /> },
    { path: "income/compounding-income", element: <CompoundingIncome /> },
    { path: "income/reward-income", element: <RewardIncome /> },
    { path: "income/club-income", element: <ClubIncome /> },
    { path: "income/trading-profit-income", element: <TradingProfitIncome /> },
    { path: "income/trading-level-income", element: <TradingLevelIncome /> },
    { path: "income/compounding-profit-income", element: <CompoundingProfitIncome /> },
    { path: "income/gift-TLC-profit", element: <GiftTLCProfit /> },
    { path: "income/gift-direct-TLC-profit", element: <GiftDirectTLCProfit /> },
    { path: "robot/trading-robot", element: <TradingRobot /> },
    { path: "robot/renewal-robot", element: <RenewalRobot /> },
    { path: "robot/investment", element: <Investment /> },
    { path: "robot/portfolio", element: <Portfolio /> },
    { path: "robot/portfolio/trading-to-compounding", element: <TradingToCompounding /> },
    { path: "staking/staking-in-TLC", element: <StakingInTLC /> },
    { path: "staking/staking-income", element: <StakingIncome /> },
    { path: "staking/staking-matching-income", element: <StackingMatchingIncome /> },
    // { path: "TLC2.0/TLC2.0-ICO", element: <TLCTwoPointOICO /> },
    // { path: "TLC2.0/TLC2.0-ICO-level-income", element: <TLCTwoPointOICOLevelIncome /> },
    // { path: "TLC2.0/TLC2.0-level-income", element: <TLCTwoPointOLevelIncome /> },
    // { path: "TLC2.0/TLC2.0-profit", element: <TLCTwoPointOProfit /> },
    { path: "wallet/deposit", element: <DepositCrypto /> },
    { path: "wallet/withdraw", element: <WithdrawAmount /> },
    { path: "wallet/swap", element: <Swap /> },
    { path: "wallet/convertWallet", element: <ConvertWallet /> },
    { path: "wallet/transferFund", element: <TransferFund /> },
    { path: "Deposit/deposit-INR-(Package)", element: <DepositINRPackage /> },
    { path: "Deposit/deposit-invoices", element: <DepositInvoices /> },
    { path: "Deposit/deposit-invoices-(Crypto)", element: <DepositInvoicesCrypto /> },
    { path: "Deposit/deposit-invoices-(INR)", element: <DepositInvoicesINR /> },
    { path: "Deposit/deposit-via-gateway", element: <DepositViaGateway /> },
    { path: "transfer/transfer-to-package-wallet", element: <TransferToPackageWallet /> },
    { path: "transfer/transfer-TLC-gift-new", element: <TransferTLCGiftNew /> },
    { path: "transfer/transfer-TLC-2.0-redeem-wallet", element: <TransferTLCTwoPointORedeemWallet /> },
    { path: "transfer/transfer-to-TLC-package-wallet", element: <TransferToTLCPackageWallet /> },
    { path: "transfer/transfer-report", element: <TransferReport /> },
    { path: "transfer/receive-report", element: <ReceiveReport /> },
    { path: "Buy&Sell/sell-TLC", element: <SellTLC /> },
    { path: "Buy&Sell/buy-sell-report", element: <BuySellReport /> },
    // { path: "financial/withdrawal-amount-(USDT)", element: <WithdrawalAmountUSDT /> },
    { path: "financial/withdrawal-amount-(CRYPTO)-for-indians", element: <WithdrawalAmountCRYPTOforIndians /> },
    // { path: "financial/withdrawal-amount-(INR)", element: <WithdrawalAmountINR /> },
    // { path: "financial/withdrawal-trading-(USDT)", element: <WithdrawalTradingUSDT /> },
    { path: "financial/withdrawal-trading-(CRYPTO)", element: <WithdrawalTradingCRYPTO /> },
    // { path: "financial/withdrawal-trading-(INR)", element: <WithdrawalTradingINR /> },
    { path: "financial/withdrawal-report", element: <WithdrawalReport /> },
    { path: "financial/account-statement", element: <AccountStatement /> },
    { path: "financial/income-summary", element: <IncomeSummary /> },
    { path: "financial/wallet-history", element: <WalletHistory /> },
    { path: "reward", element: <Reward /> },
    { path: "support", element: <Support /> },
    { path: "transaction", element: <TransactionList /> },
    { path: "referralList", element: <Referral /> }
]