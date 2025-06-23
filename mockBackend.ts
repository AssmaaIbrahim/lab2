const existingUser = new Map<string, string>();

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function mockSignUp(email: string, password: string): Promise<void> {
  await delay(500); 

  if (existingUser.has(email)) {
    throw new Error("Email already exists.");
  }

  existingUser.set(email, password);
}



export async function mockLogin(email: string, password: string): Promise<void> {
  await delay(500);

  if (!existingUser.has(email)) {
    throw new Error("User not found.");
  }

  const storedPassword = existingUser.get(email);
  if (storedPassword !== password) {
    throw new Error("Incorrect password.");
  }
}