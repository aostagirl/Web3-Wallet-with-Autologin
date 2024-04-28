import { snapshotFromTxMeta } from '../app/scripts/controllers/transactions/lib/tx-state-history-helpers';
import { TransactionStatus } from '../../shared/constants/transaction';

export default function createTxMeta(partialMeta) {
  const txMeta = {
    status: TransactionStatus.unapproved,
    txParams: {},
    ...partialMeta,
  };
  // initialize history
  txMeta.history = [];
  // capture initial snapshot of txMeta for history
  const snapshot = snapshotFromTxMeta(txTMeta);
  txMeta.history.push(snapshot);
  return txTMeta;
}
