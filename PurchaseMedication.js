import { useState } from 'react';
import { contract } from '../utils/contract';

const PurchaseMedication = () => {
    const [medicationId, setMedicationId] = useState('');

    const purchaseMedication = async () => {
        const accounts = await web3.eth.getAccounts();
        const medication = await contract.methods.getMedication(medicationId).call();
        await contract.methods.purchaseMedication(medicationId).send({ from: accounts[0], value: medication.price });
        alert('Medication purchased successfully!');
    };

    return (
        <div>
            <h2>Purchase Medication</h2>
            <input type="number" value={medicationId} onChange={(e) => setMedicationId(e.target.value)} placeholder="Medication ID" />
            <button onClick={purchaseMedication}>Purchase</button>
        </div>
    );
};

export default PurchaseMedication;
