import { StyleSheet } from "react-native";

export const COLORS = {
  primary: '#4a90e2',
  secondary: '#667eea',
  accent: '#ffc107',
  background: '#f5f1e8',
  white: '#ffffff',
  textDark: '#333333',
  textGray: '#666666',
  lightGray: '#f8f9fa',
  border: '#e0d5c7',
  error: '#d32f2f',
  success: '#388e3c',
  warning: '#fbc02d',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 30,
};

  //App.tsx styles
  export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginBottom: 15,
  },
  brandName: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  heroSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  heroImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: 15,
  },
  welcomeDescription: {
    fontSize: 16,
    color: COLORS.textGray,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 20,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textGray,
    fontWeight: '600',
  },
  previewSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  previewCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  previewText: {
    fontSize: 14,
    color: COLORS.textGray,
    lineHeight: 22,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 20,
  },
  coursePreviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  coursePreviewCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coursePreviewImage: {
    width: '100%',
    height: 100,
  },
  coursePreviewName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textDark,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  ctaSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 14,
    color: COLORS.textGray,
    textAlign: 'center',
    lineHeight: 22,
  },
  getStartedButton: {
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  getStartedText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.white,
    fontSize: 14,
    marginBottom: 8,
  },
  footerSubtext: {
    color: COLORS.white,
    fontSize: 12,
    opacity: 0.8,
  },

});