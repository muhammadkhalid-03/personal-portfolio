"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen font-mono p-6 mb-16">
      <div className="text-4xl mt-16 pt-16 mb-8">
        PioneerMart Privacy Policy
      </div>
      <div className="flex justify-start w-full max-w-4xl mb-8">
        <Link
          href="/projects"
          className="text-blue-200 hover:underline flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>
      <div
        className={`w-full max-w-4xl p-12 rounded-xl bg-navcover transform transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-right text-sm mb-6">Last Updated: May 5, 2025</div>

        <h2 className="text-2xl mb-6">Introduction</h2>
        <p className="mb-6">
          Welcome to PioneerMart. We are committed to protecting your privacy
          and ensuring transparent data practices. This Privacy Policy explains
          how we collect, use, store, and share information when you use our
          mobile application.
        </p>
        <p className="mb-6">
          PioneerMart is a marketplace platform designed exclusively for
          Grinnell College students, faculty, and staff. By using our App, you
          agree to the collection and use of information in accordance with this
          policy.
        </p>

        <h2 className="text-2xl mb-6 mt-8">Information We Collect</h2>

        <h3 className="text-xl mb-4">Information You Provide to Us</h3>
        <p className="mb-4">
          When you use PioneerMart, we collect the following information that
          you provide directly:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Account Information</strong>: Your Grinnell College email
            address and associated 6-digit OTP code to verify your email
          </li>
          <li>
            <strong>Listing Content</strong>: Information, descriptions, and
            images of items you list for sale
          </li>
          <li>
            <strong>Messages</strong>: Communications exchanged with other users
            through our platform
          </li>
          <li>
            <strong>Purchase Requests</strong>: Information related to items you
            express interest in purchasing
          </li>
          <li>
            <strong>Reports</strong>: Information you provide when reporting
            items or user behavior that violates our terms
          </li>
        </ul>

        <h3 className="text-xl mb-4">Information Collected Automatically</h3>
        <p className="mb-4">When you use our App, we automatically collect:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Device Information</strong>: Device type, operating system,
            and unique device identifiers
          </li>
          <li>
            <strong>Log Data</strong>: App errors, crash reports, and
            performance data
          </li>
        </ul>

        <h2 className="text-2xl mb-6 mt-8">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Verify your eligibility as a Grinnell College student, faculty, or
            staff
          </li>
          <li>Create and maintain your account</li>
          <li>Display your listings to other users</li>
          <li>Facilitate communication between buyers and sellers</li>
          <li>Send notifications about activity relevant to you</li>
          <li>Monitor for and address inappropriate content or behavior</li>
          <li>Improve and optimize our App functionality</li>
          <li>Troubleshoot technical issues</li>
        </ul>

        <h2 className="text-2xl mb-6 mt-8">Email Visibility</h2>
        <div className="bg-opacity-20 bg-blue-500 p-4 rounded-md mb-6">
          <p>
            <strong>Important</strong>: Your Grinnell email address will be
            visible to other users on items you list. This is essential to the
            functioning of our platform as it helps establish trust and
            facilitates communication between students. By creating an account,
            you consent to this email visibility.
          </p>
        </div>

        <h2 className="text-2xl mb-6 mt-8">
          Information Sharing and Disclosure
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties.
          However, we may share information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>With Other Users</strong>: Your Grinnell email address will
            be displayed with your listings, and messages you send will be
            delivered to the intended recipients
          </li>
          <li>
            <strong>Service Providers</strong>: We may share information with
            third-party vendors who help us operate our App (e.g., cloud storage
            providers, analytics services)
          </li>
          <li>
            <strong>Legal Requirements</strong>: We may disclose information if
            required by law, legal process, or government request
          </li>
          <li>
            <strong>Safety and Terms Enforcement</strong>: We may share
            information to protect the safety and rights of users, or to
            investigate violations of our Terms of Service
          </li>
        </ul>

        <h2 className="text-2xl mb-6 mt-8">Your Rights and Choices</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your account and personal information</li>
        </ul>
        <p className="mb-6">
          To exercise these rights, contact us at pioneermart6@gmail.com.
        </p>

        <h2 className="text-2xl mb-6 mt-8">Security</h2>
        <p className="mb-6">
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl mb-6 mt-8">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the "Last Updated" date. You are advised to review this Privacy Policy
          periodically for any changes.
        </p>

        <h2 className="text-2xl mb-6 mt-8">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Email: pioneermart6@gmail.com</li>
        </ul>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
