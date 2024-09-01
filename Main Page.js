import RegisterPatient from '../Functions/RegisterPatient';
import RegisterDoctor from '../Functions/RegisterDoctor';
import AddMedication from '../Functions/AddMedication';
import PurchaseMedication from '../Functions/PurchaseMedication';

export default function Home() {
    return (
        <div className="container">
            <h1>Medical DApp</h1>
            <RegisterPatient />
            <RegisterDoctor />
            <AddMedication />
            <PurchaseMedication />
        </div>
    );
}
