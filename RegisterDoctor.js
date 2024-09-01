import { useState } from 'react';
import { contract, ipfs } from '../utils/contract';

const RegisterDoctor = () => {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [file, setFile] = useState(null);

    const registerDoctor = async () => {
        const accounts = await web3.eth.getAccounts();
        const added = await ipfs.add(file);
        const ipfsHash = added.path;
        await contract.methods.registerDoctor(name, specialization, ipfsHash).send({ from: accounts[0] });
        alert('Doctor registered successfully!');
    };

    return (
        <div>
            <h2>Register Doctor</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder="Specialization" />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={registerDoctor}>Register</button>
        </div>
    );
};

export default RegisterDoctor;
