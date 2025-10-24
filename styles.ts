import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* Global */
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    padding: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e4a7b',
    marginBottom: 15,
    textAlign: 'center',
  },

  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 60,
    marginBottom: 10,
  },

  text: {
    color: '#1e4a7b',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3d7848',
    textAlign: 'center',
    marginBottom: 8,
  },

  /* Quote Page */
  quoteBox: {
    backgroundColor: 'lavender',
    borderLeftWidth: 5,
    borderLeftColor: '#D4AF37',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },

  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#1e4a7b',
    textAlign: 'center',
  },

  quoteAuthor: {
    textAlign: 'right',
    marginTop: 10,
    fontWeight: 'bold',
  },

  /* Courses Page */
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3d7848',
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
    marginTop: 25,
    marginBottom: 10,
  },

  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },

  courseImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e4a7b',
    marginBottom: 8,
  },

  learnMoreBtn: {
    backgroundColor: '#D4AF37',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },

  learnMoreText: {
    color: '#000',
    fontWeight: 'bold',
  },

  /* Contact Page */
  contactCard: {
    backgroundColor: '#d6f0db',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e4a7b',
    marginBottom: 5,
  },
});
