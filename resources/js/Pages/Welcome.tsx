import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const idk =
        'https://i.pinimg.com/736x/19/78/c9/1978c921d97070442915ce81f62b05d8.jpg';
    return (
        <>
            <Head title="Hoppin' Quiz" />
            <header className="border-b border-gray-200 p-4 dark:border-gray-700">
                <nav className="flex justify-end space-x-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <main className="mx-auto max-w-4xl p-8">
                <h1 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-white">
                    Hoppin' Quiz
                </h1>
                <section className="text-center">
                    <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Tech Stack: LAMP with React TSX
                    </h2>
                </section>
                <img src={idk} alt="" />
            </main>
        </>
    );
}

