/// <reference types="mysql" />
import * as mysql from 'mysql';

declare module 'promise-mysql' {
	interface IQueryFunction {
		(sql: string): Promise<any[]>;
		(sql: string, values: any[]): Promise<any[]>;
		(sql: string, values: any): Promise<any[]>;
		(options: mysql.IQueryOptions): Promise<any[]>;
		(options: mysql.IQueryOptions, values: any[]): Promise<any[]>;
		(options: mysql.IQueryOptions, values: any): Promise<any[]>;
	}

	interface IConnection {
		query: IQueryFunction;
		beginTransaction(): Promise<void>;
		commit(): Promise<void>;
		rollback(): Promise<void>;
		changeUser(options: mysql.IConnectionOptions): Promise<void>;
		end(): Promise<void>;
		destroy(): void;
		pause(): void;
		resume(): void;
		escape(value: any): string;

		escapeId(value: string): string;
		escapeId(values: string[]): string;

		format(sql: string): string;
		format(sql: string, values: any[]): string;
		format(sql: string, values: any): string;
	}

	interface IPool {
		getConnection(): Promise<IConnection>;
		releaseConnection(connection: IConnection): void;
		query: IQueryFunction;
		end(): Promise<void>;
		escape(value: any): string;

		escapeId(value: string): string;
		escapeId(values: string[]): string;
	}

	function createConnection(config: mysql.IConnectionConfig): IConnection;
	function createPool(config: mysql.IPoolConfig): IPool;

	var Types: mysql.FieldType;

	function escape(value: any): string;

	function escapeId(value: string): string;
	function escapeId(values: string[]): string;

	function format(sql: string): string;
	function format(sql: string, values: any[]): string;
	function format(sql: string, values: any): string;
}
