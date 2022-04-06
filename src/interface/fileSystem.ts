export default interface FileSystem<T> {
	fetch(id: string): T | undefined;
}
