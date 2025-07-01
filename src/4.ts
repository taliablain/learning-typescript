function identity<T>(value: T): T  {
    return value;
}

identity<string>("hello");
identity<number>(42);


function wrapInArray<T>(value: T): T[] {
    return [value];
}

const numberArray = wrapInArray(5);
const stringArray = wrapInArray("hello");



interface User {
    id: number;
    name: string;
    email?: string;
}


type UserPreview = Pick<User, "id" | "name">;
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;

type UserWithoutEmail = Omit<User, "email">;
type CompleteUser = Required<User>;
type RolePermissions = Record<"admin" | "user", boolean>;



type Statuses = "pending" | "approved" | "rejected";
type NonRejected = Exclude<Statuses, "rejected">;


type Name = string | null | undefined;
type ValidName = NonNullable<Name>;



type Dog = {kind: "dog", bark: () => void};
type Cat = {kind: "cat"; meow: () => void};

type Pet = Dog | Cat;

function speak(pet: Pet) {
    if (pet.kind === "dog") {
        pet.bark();
    } else {
        pet.meow();
    }
}


type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;



interface ApiResponse<T> {
    status: "success" | "error";
    data: T;
    message?: string;
}

function handleApiResponse<T>(response: ApiResponse<T>): void {
    if (response.status === "success") {
        console.log("Data received: ", response.data);
    } else {
        console.error("Error:", response.message ?? "Unknown error");
    }
}

//example usage
type SystemUser = { id: number; name: string };

const response: ApiResponse<SystemUser> = {
    status: "success",
    data: {id: 1, name: "Talia"}
}

handleApiResponse(response);



