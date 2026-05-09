import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2d4a5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#2e2e2e',
    marginBottom: 14,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  label: {
    marginBottom: 8,
    color: '#5f4b16',
    fontSize: 16,
    fontWeight: '600',
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2d4a5',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 14,
  },
  picker: {
    width: '100%',
    color: '#2e2e2e',
  },
  pickerItem: {
    height: 44,
  },
});
