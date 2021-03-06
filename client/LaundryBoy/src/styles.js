import { StyleSheet } from 'react-native'

// Measurements
const BASE_UNIT = 50

// Colors
const CARIBBEAN_GREEN = '#03C9A9'
const TURQUOISE = '#4ECDC4'
const CALIFORNIA = '#F89406'
const WHITE = '#FFF'
const BLUE_WHITE = '#E4F1FE'
const DARK_GREY = '#444'
const GREY = '#888'
const LIGHT_GREY = '#EFEFEF'

const PRIMARY = CARIBBEAN_GREEN
const PRIMARY_ALT = TURQUOISE
const SECONDARY = WHITE
const SECONDARY_ALT = LIGHT_GREY 
const ACCENT = CALIFORNIA
const MUTED = GREY

export const color = {
    PRIMARY,
    PRIMARY_ALT,
    SECONDARY,
    SECONDARY_ALT,
    ACCENT,
    MUTED,
}

// Font Styles
const BASE_FONT_SIZE = 18
const DEFAULT_TEXT_COLOR = DARK_GREY
const INVERSE_TEXT_COLOR = WHITE
const PRIMARY_TEXT_COLOR = PRIMARY 
const ACCENT_TEXT_COLOR = ACCENT
const MUTED_TEXT_COLOR = GREY

// Component Styles
const block = {
    padding: BASE_UNIT / 3
} 

export const util = StyleSheet.create({
    PAD: { padding: BASE_UNIT / 2 },
    PUSH_BOTTOM: { marginBottom: BASE_UNIT / 3 },
    BG_DEFAULT: { backgroundColor: PRIMARY },
    BG_INVERSE: { backgroundColor: SECONDARY },
    BG_INVERSE_ALT: { backgroundColor: SECONDARY_ALT },
    BG_ACCENT: { backgroundColor: ACCENT },
    BG_MUTED: { backgroundColor: MUTED },
    TEXT_DEFAULT: { color: DEFAULT_TEXT_COLOR },
    TEXT_INVERSE: { color: INVERSE_TEXT_COLOR },
    TEXT_PRIMARY: { color: PRIMARY_TEXT_COLOR },
    TEXT_ACCENT: { color: ACCENT_TEXT_COLOR },
    TEXT_MUTED: { color: MUTED_TEXT_COLOR },
    TEXT_CENTER: { textAlign: 'center' },
    TEXT_RIGHT: { textAlign: 'right' },
})

export const components = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        padding: BASE_UNIT / 3,
        backgroundColor: PRIMARY,
    },
    toolbarContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: PRIMARY,
    },
    toolbarDrawerIcon: {
        padding: 12,
        flex: 1,
    },
    toolbar: {
        flex: 8,
        backgroundColor: PRIMARY,
    },
    drawer: {
        flexDirection: 'column'
    },
    drawerItem: {
        ...block,
        flex: 1,
    },
    content: {
        ...block,
        flex: 9,
        backgroundColor: SECONDARY,
    },
    orderCard: {
        flex: 1,
        backgroundColor: SECONDARY_ALT,
        marginBottom: BASE_UNIT / 3,
    },
    orderCardContent: {
        ...block,
        minHeight: BASE_UNIT * 2.25,
    },
    orderCardButton: {
    },
    bottomNav: {
        flex: 2,
        flexDirection: 'row',
        minHeight: BASE_UNIT * 1.5,
        backgroundColor: PRIMARY,
    },
    bottomNavItem: {
        ...block,
        flex: 1,
        borderRightWidth: 1,
        borderColor: PRIMARY,
        backgroundColor: PRIMARY_ALT,
    },
    bottomNavItemText: {
        fontSize: BASE_FONT_SIZE,
        color: INVERSE_TEXT_COLOR,
        textAlign: 'center',
    },
})

export const font = StyleSheet.create({
    DEFAULT: {
        fontSize: BASE_FONT_SIZE,
        color: DEFAULT_TEXT_COLOR,
    },
    MEDIUM: {
        fontSize: BASE_FONT_SIZE * 1.2,
    },
    LARGE: {
        fontSize: BASE_FONT_SIZE * 1.8,
    },
    ITALIC: {
        fontStyle: 'italic',
    },
    BOLD: {
        fontWeight: 'bold',
    },
})
    