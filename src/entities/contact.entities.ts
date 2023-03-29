export interface IContact {
	id: number;
	name: string;
	email: string;
	phone: string;
	created_at: string;
}
export interface IContactEdit {
	email?: string;
	name?: string;
	phone?: string;
}
export interface IContactDelete {
	id: number;
}
export interface IContactCreate {
	email: string;
	name: string;
	phone?: string;
}
