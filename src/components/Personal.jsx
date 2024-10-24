import Input from './Input';
import Card from './Card';

export default function Personal({ personal, setPersonal }) {
  return (
    <Card title="Personal Details">
      <Input
        label="Full Name"
        id="name"
        value={personal.name}
        setValue={(v) => setPersonal({ ...personal, name: v })}
      />
      <Input
        label="Email"
        type="email"
        id="email"
        value={personal.email}
        setValue={(v) => setPersonal({ ...personal, email: v })}
      />
      <Input
        label="Phone number"
        type="tel"
        id="phone"
        value={personal.phoneNumber}
        setValue={(v) => setPersonal({ ...personal, phoneNumber: v })}
      />
      <Input
        label="Address"
        id="address"
        value={personal.address}
        setValue={(v) => setPersonal({ ...personal, address: v })}
      />
    </Card>
  );
}
