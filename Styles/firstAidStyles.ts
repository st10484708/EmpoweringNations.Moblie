import { COLORS, SPACING, BORDER_RADIUS } from "./styles";
import { StyleSheet } from "react-native";

export const firstAidStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  imageSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: BORDER_RADIUS.lg,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  icon: {
    fontSize: 28,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: SPACING.sm,
  },
  infoDescription: {
    fontSize: 14,
    color: COLORS.textGray,
    lineHeight: 22,
  },
  infoHighlight: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  listContainer: {
    marginTop: SPACING.sm,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
  },
  bullet: {
    fontSize: 16,
    color: COLORS.primary,
    marginRight: SPACING.sm,
    fontWeight: '700',
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textGray,
    lineHeight: 22,
  },
  divider: {
    height: 3,
    backgroundColor: COLORS.primary,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.xl,
    borderRadius: 2,
  },
  registerSection: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
    backgroundColor: COLORS.secondary,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  registerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.white,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  registerDescription: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.xl,
    lineHeight: 22,
    opacity: 0.95,
  },
  registerButton: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xxl,
    borderRadius: BORDER_RADIUS.full,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  registerButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
});