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

// export class Contact {
// 	id: number;
// 	email: string;
// 	name: string;
// 	phone: string;
// 	created_at: string;
// 	constructor({ id, email, name, phone, created_at }: IContact) {
// 		this.id = id;
// 		this.email = email;
// 		this.name = name;
// 		this.phone = phone;
// 		this.created_at = created_at;
// 	}

// 	edit({ email, name, phone }: IContactEdit) {
// 		this.email ??= email;
// 		this.name ??= name;
// 		this.phone ??= phone;
// 	}
// }
