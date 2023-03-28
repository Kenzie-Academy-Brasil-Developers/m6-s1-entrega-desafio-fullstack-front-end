export interface IUser {
	id: string;
	name: string;
	email: string;
	phone?: string | null | undefined;
}

export interface IUserRegister {
	id: string;
	name: string;
	email: string;
	password: string;
	passwordConfirm?: string;
	phone?: string | null | undefined;
}

export interface IUserLogin {
	email: string;
	password: string;
}
