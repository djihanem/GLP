
// ProfileComponent for displaying lawyer's detailed profile
const ProfileComponent = ({ lawyer }) => (
    <div>
        <h3>{lawyer.name}</h3>
        <p>Spécialité: {lawyer.speciality}</p>
        <p>Note: {lawyer.rating}</p>
        {/* Add more profile details here */}
    </div>
);

export default ProfileComponent;