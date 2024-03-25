export default function InputError({error}: {error: string|undefined}) {
    return (
        <p className="text-red-600 text-sm font-semibold">{error}</p>
    );
}