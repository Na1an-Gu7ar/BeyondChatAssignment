import {
    Box,
    Typography,
    IconButton,
    Avatar,
    Divider,
    InputBase,
    Button,
    Stack,
    Paper,
    Tooltip,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ChatPanel = () => {
    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                borderRight: '1px solid #e5e7eb',
                bgcolor: '#fff',
                height: '100%',
            }}
        >
            <Box
                component="header"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 3,
                    py: 1.5,
                    borderBottom: '1px solid #e5e7eb',
                }}
            >
                <Typography variant="body2" fontWeight={600} color="text.primary">
                    Luis Easton
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Tooltip title="More options">
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Toggle dark mode">
                        <IconButton size="small">
                            <DarkModeIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            backgroundColor: '#111827',
                            '&:hover': { backgroundColor: '#1f2937' },
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            transition: 'background-color 0.2s ease',
                        }}
                    >
                        Close
                    </Button>
                </Stack>
            </Box>

            <Box
                component="section"
                sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    px: 4,
                    py: 3,
                    bgcolor: '#ffffff',
                    scrollBehavior: 'smooth',
                }}
            >
                <Box maxWidth="40rem">
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: '#f3f4f6',
                            color: '#111827',
                            fontSize: '0.75rem',
                            borderRadius: 2,
                            p: 1.5,
                            mb: 2,
                            width: 'fit-content',
                            transition: 'box-shadow 0.2s ease',
                            '&:hover': {
                                boxShadow: 2,
                            },
                        }}
                    >
                        I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.
                    </Paper>

                    <Stack direction="row" spacing={1} alignItems="flex-end" justifyContent="flex-end">
                        <Box
                            sx={{
                                bgcolor: '#bfdbfe',
                                color: '#1e3a8a',
                                fontSize: '0.75rem',
                                borderRadius: 2,
                                p: 1.5,
                                maxWidth: '16rem',
                                transition: 'box-shadow 0.2s ease',
                                '&:hover': {
                                    boxShadow: 2,
                                },
                            }}
                        >
                            Let me just look into this for you, Luis.
                            <Typography
                                sx={{ fontSize: '9px', mt: 0.5, color: '#2563eb' }}
                            >
                                Seen · 7min
                            </Typography>
                        </Box>
                        <Avatar
                            alt="Luis Easton"
                            src="https://storage.googleapis.com/a1aa/image/3f2fd8ed-99a7-4189-6f2e-c7d82e9624bc.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                    </Stack>
                </Box>
            </Box>

            <Divider />
            <Box
                component="form"
                sx={{
                    px: 3,
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    borderTop: '1px solid #e5e7eb',
                }}
            >
                <Button
                    startIcon={<ChatBubbleOutlineIcon fontSize="small" />}
                    endIcon={<ExpandMoreIcon fontSize="small" />}
                    sx={{
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        textTransform: 'none',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: '#374151' },
                    }}
                >
                    Chat
                </Button>
                <Typography variant="caption" color="text.secondary">
                    Use 1K for shortcuts
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <InputBase
                        placeholder="Type a message..."
                        fullWidth
                        sx={{
                            width: '100%',
                            fontSize: '0.75rem',
                            border: '1px solid #d1d5db',
                            px: 2,
                            py: 1,
                            borderRadius: 1,
                            transition: 'border-color 0.2s ease',
                            '&:focus-within': {
                                borderColor: '#3b82f6',
                                boxShadow: '0 0 0 1px #3b82f6',
                            },
                        }}
                    />
                </Box>
                <IconButton>
                    <SendIcon fontSize="small" sx={{ color: '#6b7280' }} />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon fontSize="small" sx={{ color: '#6b7280' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ChatPanel;
