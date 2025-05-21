import {
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import BugReportIcon from '@mui/icons-material/BugReport';

const InboxItem = ({
    icon,
    title,
    subtitle,
    time,
    bgColor = '#333',
    textColor = '#fff',
    isIconFA = false,
    extraLine,
}) => (
    <ListItem
        alignItems="flex-start"
        sx={{
            cursor: 'pointer',
            px: 2,
            py: 1.5,
            '&:hover': {
                bgcolor: '#f9fafb',
            },
            transition: 'background-color 0.2s ease',
        }}
    >
        <ListItemAvatar>
            <Avatar
                sx={{
                    bgcolor: bgColor,
                    color: textColor,
                    fontSize: 12,
                    fontWeight: 600,
                    width: 24,
                    height: 24,
                }}
            >
                {isIconFA ? <BugReportIcon fontSize="inherit" /> : icon}
            </Avatar>
        </ListItemAvatar>
        <Box flex={1} ml={2} minWidth={0}>
            <Typography variant="body2" fontWeight={600} noWrap>
                {title}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
                {subtitle}
            </Typography>
            {extraLine && (
                <Typography variant="caption" color="text.secondary" noWrap>
                    {extraLine}
                </Typography>
            )}
        </Box>
        <Typography variant="caption" color="text.secondary" ml={1} flexShrink={0}>
            {time}
        </Typography>
    </ListItem>
);

const LeftSidebar = () => {
    return (
        <Box
            sx={{
                width: 280,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #e5e7eb',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1.5,
                    borderBottom: '1px solid #e5e7eb',
                }}
            >
                <Typography variant="body2" fontWeight={600}>
                    Your inbox
                </Typography>
                <IconButton size="small">
                    <Typography variant="caption" color="text.secondary">
                        5 Open
                    </Typography>
                    <ExpandMoreIcon fontSize="small" />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1,
                    borderBottom: '1px solid #e5e7eb',
                }}
            >
                <Box display="flex" alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                        Waiting longest
                    </Typography>
                    <ExpandMoreIcon sx={{ fontSize: 14, ml: 0.5 }} />
                </Box>
                <IconButton size="small">
                    <MoreHorizIcon fontSize="small" />
                </IconButton>
            </Box>

            <Box flex={1} sx={{ overflowY: 'auto', scrollBehavior: 'smooth' }}>
                <List disablePadding>
                    <InboxItem icon="L" title="Luis · Github" subtitle="Hey! I have a questio..." time="45m" bgColor="#2563eb" />
                    <InboxItem icon="I" title="Ivan · Nike" subtitle="Hi there, I have a qu..." time="3min" bgColor="#dc2626" />
                    <InboxItem icon="L" title="Lead from New York" subtitle="Good morning, let me..." time="40m" bgColor="#111827" />
                    <InboxItem
                        icon={<BugReportIcon fontSize="inherit" />}
                        title="Booking API problems"
                        subtitle="Bug report"
                        extraLine="Luis · Small Crafts"
                        time="45m"
                        isIconFA
                        bgColor="#000000"
                    />
                    <InboxItem
                        icon="M"
                        title="Miracle · Exemplary Bank"
                        subtitle="Hey there, I'm here to..."
                        time="45m"
                        bgColor="#d1d5db"
                        textColor="#4b5563"
                    />
                </List>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    py: 1.5,
                    borderTop: '1px solid #e5e7eb',
                    height: 14,
                }}
            >
                <Tooltip title="Toggle sidebar view">
                    <IconButton size="small">
                        <ViewModuleIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Toggle list view">
                    <IconButton size="small">
                        <ViewListIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default LeftSidebar;
