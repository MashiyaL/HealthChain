import { useState } from 'react';
import { contract, ipfs } from '../utils/contract';

const RegisterPatient = () => {
    const [name, setName] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [file, setFile] = useState(null);

    const registerPatient = async () => {
        const accounts = await web3.eth.getAccounts();
        const added = await ipfs.add(file);
        const ipfsHash = added.path;
        await contract.methods.registerPatient(name, medicalHistory, ipfsHash).send({ from: accounts[0] });
        alert('Patient registered successfully!');
    };

    return (
        <div>
            <h2>Register Patient</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} placeholder="Medical History" />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={registerPatient}>Register</button>
        </div>
    );
};

export default RegisterPatient;
  