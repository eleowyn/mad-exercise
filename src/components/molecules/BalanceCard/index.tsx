import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BalanceCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Your Balance</Text>
      <Text style={styles.balance}>Rp. 10.000.000</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Hand</Text>
        <Text style={styles.value}>Rp. 4.000.000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Cash on Bank</Text>
        <Text style={styles.value}>Rp. 6.000.000</Text>
      </View>
    </View>
  );
};


export default BalanceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 16,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#020202',
    marginBottom: 4,
  },
  balance: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: '#020202',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4B4B4B',
  },
  value: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#020202',
  },
});
