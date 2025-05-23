import DashboardIcon from '@mui/icons-material/Dashboard';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentsIcon from '@mui/icons-material/Payments';
import StarRateIcon from '@mui/icons-material/StarRate';
import HelpIcon from '@mui/icons-material/Help';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export const NAVIGATION = [
    {
        segment: '/dashboard',
        title: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        title: 'Setting',
        icon: SettingsOutlinedIcon,
        children: [
            {
                segment: '/dashboard/setting/profile',
                title: 'Profile',
                icon: CircleOutlinedIcon,
            },
            {
                segment: '/dashboard/setting/wallet-address',
                title: 'Wallet Address',
                icon: CircleOutlinedIcon,
            },
            // {
            //     segment: '/dashboard/setting/bank-KYC',
            //     title: 'Bank KYC',
            //     icon: CircleOutlinedIcon,
            // },
            {
                segment: '/dashboard/setting/Set-transaction-password',
                title: 'Set Transaction Password',
                icon: CircleOutlinedIcon,
            },
        ],
    },
    {
        title: 'Network',
        icon: CellTowerOutlinedIcon,
        children: [
            {
                segment: '/dashboard/network/networkList',
                title: 'Network List',
                icon: CircleOutlinedIcon,
            },
            {
                segment: '/dashboard/network/referralList',
                title: 'Referral List',
                icon: CircleOutlinedIcon,
            },
            // {
            //     segment: '/dashboard/network/all-team',
            //     title: 'All Team',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/network/unilevel',
            //     title: 'Unilevel',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/network/business-history',
            //     title: 'Business History',
            //     icon: CircleOutlinedIcon,
            // },
        ],
    },
    {
        segment: '/dashboard/trade',
        title: 'Trade',
        icon: HandshakeIcon,
    },
    {
        segment: '/dashboard/transaction',
        title: 'Transaction',
        icon: ReceiptLongOutlinedIcon,
    },
    // {
    //     segment: '/dashboard/referralList',
    //     title: 'Referral',
    //     icon: PeopleAltOutlinedIcon,
    // },
    // {
    //     title: 'Income',
    //     icon: CurrencyExchangeOutlinedIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/income/level-income',
    //             title: 'Level Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/matching-income',
    //             title: 'Matching Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/staking-matching-income',
    //             title: 'Staking Matching Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/IB-income',
    //             title: 'IB Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/achievement-income',
    //             title: 'Achievement Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/compounding-income',
    //             title: 'Compounding Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/reward-income',
    //             title: 'Reward Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/club-income',
    //             title: 'Club Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/trading-profit-income',
    //             title: 'Trading Profit Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/trading-level-income',
    //             title: 'Trading Level Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/compounding-profit-income',
    //             title: 'Compounding Profit Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/gift-TLC-profit',
    //             title: 'Gift TLC Profit',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/income/gift-direct-TLC-profit',
    //             title: 'Gift Direct TLC Profit',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     title: 'Robot',
    //     icon: SmartToyOutlinedIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/robot/trading-robot',
    //             title: 'Trading Robot',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/robot/renewal-robot',
    //             title: 'Renewal Robot',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/robot/investment',
    //             title: 'Investment',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/robot/portfolio',
    //             title: 'Portfolio',
    //             icon: CircleOutlinedIcon,
    //         },
    //     ],
    // },
    // {
    //     title: 'Staking',
    //     icon: LayersIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/staking/staking-in-TLC',
    //             title: 'Staking in TLC',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/staking/staking-income',
    //             title: 'Staking Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/staking/staking-matching-income',
    //             title: 'Staking Matching Income',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     title: 'TLC2.0',
    //     icon: TrackChangesIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/TLC2.0/TLC2.0-ICO',
    //             title: 'TLC2.0 ICO',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/TLC2.0/TLC2.0-ICO-level-income',
    //             title: 'TLC2.0 ICO Level Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/TLC2.0/TLC2.0-level-income',
    //             title: 'TLC2.0 Level Income',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/TLC2.0/TLC2.0-profit',
    //             title: 'TLC2.0 Profit',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    {
        title: 'Wallet',
        icon: AccountBalanceWalletIcon,
        children: [
            // {
            //     segment: '/dashboard/Deposit/deposit-via-gateway',
            //     title: 'Deposit via Gateway',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/Deposit/deposit-invoices',
            //     title: 'Deposit Invoices',
            //     icon: CircleOutlinedIcon,
            // },
            {
                segment: '/dashboard/wallet/deposit',
                title: 'Deposit',
                icon: CircleOutlinedIcon,
            },
            {
                segment: '/dashboard/wallet/withdraw',
                title: 'Withdraw',
                icon: CircleOutlinedIcon,
            },
            {
                segment: '/dashboard/wallet/swap',
                title: 'Swap',
                icon: CircleOutlinedIcon,
            },
            // {
            //     segment: '/dashboard/wallet/convertWallet',
            //     title: 'Convert wallet',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/wallet/transferFund',
            //     title: 'Transfer fund',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/Deposit/deposit-invoices-(Crypto)',
            //     title: 'Deposit Invoices (Crypto)',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/Deposit/deposit-INR-(Package)',
            //     title: 'Deposit INR (Package)',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/Deposit/deposit-invoices-(INR)',
            //     title: 'Deposit Invoices (INR)',
            //     icon: CircleOutlinedIcon,
            // }
        ],
    },
    // {
    //     title: 'Transfer',
    //     icon: MoveUpIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/transfer/transfer-to-package-wallet',
    //             title: 'Transfer to Package Wallet',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/transfer/transfer-TLC-gift-new',
    //             title: 'Transfer TLC Gift New',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/transfer/transfer-TLC-2.0-redeem-wallet',
    //             title: 'Transfer TLC 2.0 Redeem Wallet',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/transfer/transfer-to-TLC-package-wallet',
    //             title: 'Transfer to TLC Package Wallet',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/transfer/transfer-report',
    //             title: 'Transfer Report',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/transfer/receive-report',
    //             title: 'Receive Report',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     title: 'Buy/Sell',
    //     icon: InventoryIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/Buy&Sell/sell-TLC',
    //             title: 'Sell TLC',
    //             icon: CircleOutlinedIcon
    //         },
    //         {
    //             segment: '/dashboard/Buy&Sell/buy-sell-report',
    //             title: 'Buy Sell Report',
    //             icon: CircleOutlinedIcon
    //         }
    //     ],
    // },
    // {
    //     title: 'Financial',
    //     icon: PaymentsIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/financial/withdrawal-amount-(USDT)',
    //             title: 'Withdrawal Amount (USDT)',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-amount-(CRYPTO)-for-indians',
    //             title: 'Withdrawal Amount (CRYPTO) for Indians',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-amount-(INR)',
    //             title: 'Withdrawal Amount (INR)',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-trading-(USDT)',
    //             title: 'Withdrawal Trading (USDT)',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-trading-(CRYPTO)',
    //             title: 'Withdrawal Trading (CRYPTO)',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-trading-(INR)',
    //             title: 'Withdrawal Trading (INR)',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/withdrawal-report',
    //             title: 'Withdrawal Report',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/account-statement',
    //             title: 'Account Statement',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/income-summary',
    //             title: 'Income Summary',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/financial/wallet-history',
    //             title: 'Wallet History',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     segment: '/dashboard/reward',
    //     title: 'Reward',
    //     icon: StarRateIcon,
    // },
    // {
    //     segment: '/dashboard/support',
    //     title: 'Support',
    //     icon: HelpIcon,
    // }
]