import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  response = {
    data: [
      {
        team_member_details_id: 366436744,
        users_id: 0,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366436745,
        emp_code: 'EMP005',
        name: 'Ali Sayed',
        first_name: 'Ali',
        last_name: 'Sayed',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: null,
        location: null,
        designation: null,
        departments_id: null,
        joining_statuses_id: 1,
        email_id: 'ali.sayed@bankopen.co',
        mobile_number: null,
        date_of_birth: null,
        profile_image: null,
        joining_status: { data: { id: 1, status: 'Pending' } },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366436745,
            request_data: {
              email_id: 'ali.sayed@bankopen.co',
              first_name: 'Ali',
              last_name: 'Sayed',
              departments_id: '',
              open_roles_id: 3,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Ali Sayed',
              accounts_id: 365418059,
              companies_id: 365418059,
              users_id: 365695856,
            },
            role_name: 'Employee',
          },
        },
      },
      {
        team_member_details_id: 366029305,
        users_id: 365695856,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366029305,
        emp_code: 'EMP001',
        name: 'Zemrin Test',
        first_name: 'Zemrin',
        last_name: 'Test',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: '09-06-2022',
        location: null,
        designation: null,
        departments_id: 0,
        joining_statuses_id: 2,
        email_id: 'zemrin.pa+8968@bankopen.co',
        mobile_number: '1212132434',
        date_of_birth: '1970-01-01',
        profile_image: null,
        joining_status: { data: { id: 2, status: 'Active' } },
        user_roles: {
          data: {
            user_roles_id: 365529252,
            users_id: 365695856,
            open_roles_id: 1,
            created_at: '2022-06-09 17:54:55',
            updated_at: '2022-06-09 17:54:55',
            user: {
              data: {
                users_id: 365695856,
                first_name: 'Zemrin',
                last_name: 'Test',
                last_login: '2023-03-16 15:33:17',
                my_referral_code: 'Ubcda5ffbac87d558ae8c35bac1cfacd1677',
                has_email_verified: 0,
                has_mobile_number_verified: 0,
                skip_onboarding: 0,
                intercom_user_hash:
                  'a527699b68ff90bc2132087c805314acaae18688bc35b3530d0be167aa8b4eac',
                intercom_user_hash_android:
                  '3d9ba668dfc3d67e36b2db591ddce9a4bf3f6994c7ec344ece11eb59684dfc6f',
                is_banned: 0,
                ban_reason: 0,
                is_disabled: 0,
                disabled_reason: 0,
                is_deleted: 0,
                source_of_registration: 'app.bankonnect.co',
              },
            },
            open_roles: {
              data: {
                open_roles_id: 1,
                name: 'Owner',
                permissions:
                  '{"sandbox":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}},"live":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}}}',
                description: 'Permissions for owner',
                created_at: '2022-08-30 12:42:24',
                updated_at: '2022-08-30 12:42:24',
              },
            },
          },
        },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366029305,
            request_data: {
              email_id: 'zemrin.pa+8968@bankopen.co',
              first_name: 'Zemrin',
              last_name: 'Test',
              departments_id: '',
              open_roles_id: 1,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Zemrin Test',
              users_id: 365695856,
              accounts_id: 365418059,
              companies_id: 365418059,
            },
            role_name: 'Owner',
          },
        },
      },
      {
        team_member_details_id: 366029305,
        users_id: 365695856,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366029305,
        emp_code: 'EMP001',
        name: 'Zemrin Test',
        first_name: 'Zemrin',
        last_name: 'Test',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: '09-06-2022',
        location: null,
        designation: null,
        departments_id: 0,
        joining_statuses_id: 2,
        email_id: 'zemrin.pa+8968@bankopen.co',
        mobile_number: '1212132434',
        date_of_birth: '1970-01-01',
        profile_image: null,
        joining_status: { data: { id: 2, status: 'Active' } },
        user_roles: {
          data: {
            user_roles_id: 365529252,
            users_id: 365695856,
            open_roles_id: 1,
            created_at: '2022-06-09 17:54:55',
            updated_at: '2022-06-09 17:54:55',
            user: {
              data: {
                users_id: 365695856,
                first_name: 'Zemrin',
                last_name: 'Test',
                last_login: '2023-03-16 15:33:17',
                my_referral_code: 'Ubcda5ffbac87d558ae8c35bac1cfacd1677',
                has_email_verified: 0,
                has_mobile_number_verified: 0,
                skip_onboarding: 0,
                intercom_user_hash:
                  'a527699b68ff90bc2132087c805314acaae18688bc35b3530d0be167aa8b4eac',
                intercom_user_hash_android:
                  '3d9ba668dfc3d67e36b2db591ddce9a4bf3f6994c7ec344ece11eb59684dfc6f',
                is_banned: 0,
                ban_reason: 0,
                is_disabled: 0,
                disabled_reason: 0,
                is_deleted: 0,
                source_of_registration: 'app.bankonnect.co',
              },
            },
            open_roles: {
              data: {
                open_roles_id: 1,
                name: 'Owner',
                permissions:
                  '{"sandbox":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}},"live":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}}}',
                description: 'Permissions for owner',
                created_at: '2022-08-30 12:42:24',
                updated_at: '2022-08-30 12:42:24',
              },
            },
          },
        },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366029305,
            request_data: {
              email_id: 'zemrin.pa+8968@bankopen.co',
              first_name: 'Zemrin',
              last_name: 'Test',
              departments_id: '',
              open_roles_id: 1,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Zemrin Test',
              users_id: 365695856,
              accounts_id: 365418059,
              companies_id: 365418059,
            },
            role_name: 'Owner',
          },
        },
      },
      {
        team_member_details_id: 366029305,
        users_id: 365695856,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366029305,
        emp_code: 'EMP001',
        name: 'Zemrin Test',
        first_name: 'Zemrin',
        last_name: 'Test',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: '09-06-2022',
        location: null,
        designation: null,
        departments_id: 0,
        joining_statuses_id: 2,
        email_id: 'zemrin.pa+8968@bankopen.co',
        mobile_number: '1212132434',
        date_of_birth: '1970-01-01',
        profile_image: null,
        joining_status: { data: { id: 2, status: 'Active' } },
        user_roles: {
          data: {
            user_roles_id: 365529252,
            users_id: 365695856,
            open_roles_id: 1,
            created_at: '2022-06-09 17:54:55',
            updated_at: '2022-06-09 17:54:55',
            user: {
              data: {
                users_id: 365695856,
                first_name: 'Zemrin',
                last_name: 'Test',
                last_login: '2023-03-16 15:33:17',
                my_referral_code: 'Ubcda5ffbac87d558ae8c35bac1cfacd1677',
                has_email_verified: 0,
                has_mobile_number_verified: 0,
                skip_onboarding: 0,
                intercom_user_hash:
                  'a527699b68ff90bc2132087c805314acaae18688bc35b3530d0be167aa8b4eac',
                intercom_user_hash_android:
                  '3d9ba668dfc3d67e36b2db591ddce9a4bf3f6994c7ec344ece11eb59684dfc6f',
                is_banned: 0,
                ban_reason: 0,
                is_disabled: 0,
                disabled_reason: 0,
                is_deleted: 0,
                source_of_registration: 'app.bankonnect.co',
              },
            },
            open_roles: {
              data: {
                open_roles_id: 1,
                name: 'Owner',
                permissions:
                  '{"sandbox":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}},"live":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}}}',
                description: 'Permissions for owner',
                created_at: '2022-08-30 12:42:24',
                updated_at: '2022-08-30 12:42:24',
              },
            },
          },
        },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366029305,
            request_data: {
              email_id: 'zemrin.pa+8968@bankopen.co',
              first_name: 'Zemrin',
              last_name: 'Test',
              departments_id: '',
              open_roles_id: 1,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Zemrin Test',
              users_id: 365695856,
              accounts_id: 365418059,
              companies_id: 365418059,
            },
            role_name: 'Owner',
          },
        },
      },
      {
        team_member_details_id: 366029305,
        users_id: 365695856,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366029305,
        emp_code: 'EMP001',
        name: 'Zemrin Test',
        first_name: 'Zemrin',
        last_name: 'Test',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: '09-06-2022',
        location: null,
        designation: null,
        departments_id: 0,
        joining_statuses_id: 2,
        email_id: 'zemrin.pa+8968@bankopen.co',
        mobile_number: '1212132434',
        date_of_birth: '1970-01-01',
        profile_image: null,
        joining_status: { data: { id: 2, status: 'Active' } },
        user_roles: {
          data: {
            user_roles_id: 365529252,
            users_id: 365695856,
            open_roles_id: 1,
            created_at: '2022-06-09 17:54:55',
            updated_at: '2022-06-09 17:54:55',
            user: {
              data: {
                users_id: 365695856,
                first_name: 'Zemrin',
                last_name: 'Test',
                last_login: '2023-03-16 15:33:17',
                my_referral_code: 'Ubcda5ffbac87d558ae8c35bac1cfacd1677',
                has_email_verified: 0,
                has_mobile_number_verified: 0,
                skip_onboarding: 0,
                intercom_user_hash:
                  'a527699b68ff90bc2132087c805314acaae18688bc35b3530d0be167aa8b4eac',
                intercom_user_hash_android:
                  '3d9ba668dfc3d67e36b2db591ddce9a4bf3f6994c7ec344ece11eb59684dfc6f',
                is_banned: 0,
                ban_reason: 0,
                is_disabled: 0,
                disabled_reason: 0,
                is_deleted: 0,
                source_of_registration: 'app.bankonnect.co',
              },
            },
            open_roles: {
              data: {
                open_roles_id: 1,
                name: 'Owner',
                permissions:
                  '{"sandbox":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}},"live":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}}}',
                description: 'Permissions for owner',
                created_at: '2022-08-30 12:42:24',
                updated_at: '2022-08-30 12:42:24',
              },
            },
          },
        },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366029305,
            request_data: {
              email_id: 'zemrin.pa+8968@bankopen.co',
              first_name: 'Zemrin',
              last_name: 'Test',
              departments_id: '',
              open_roles_id: 1,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Zemrin Test',
              users_id: 365695856,
              accounts_id: 365418059,
              companies_id: 365418059,
            },
            role_name: 'Owner',
          },
        },
      },
      {
        team_member_details_id: 366029305,
        users_id: 365695856,
        accounts_id: 365418059,
        companies_id: 365418059,
        team_invites_id: 366029305,
        emp_code: 'EMP001',
        name: 'Zemrin Test',
        first_name: 'Zemrin',
        last_name: 'Test',
        approver_name: 'Zemrin Test',
        approver_users_id: 365695856,
        date_of_joining: '09-06-2022',
        location: null,
        designation: null,
        departments_id: 0,
        joining_statuses_id: 2,
        email_id: 'zemrin.pa+8968@bankopen.co',
        mobile_number: '1212132434',
        date_of_birth: '1970-01-01',
        profile_image: null,
        joining_status: { data: { id: 2, status: 'Active' } },
        user_roles: {
          data: {
            user_roles_id: 365529252,
            users_id: 365695856,
            open_roles_id: 1,
            created_at: '2022-06-09 17:54:55',
            updated_at: '2022-06-09 17:54:55',
            user: {
              data: {
                users_id: 365695856,
                first_name: 'Zemrin',
                last_name: 'Test',
                last_login: '2023-03-16 15:33:17',
                my_referral_code: 'Ubcda5ffbac87d558ae8c35bac1cfacd1677',
                has_email_verified: 0,
                has_mobile_number_verified: 0,
                skip_onboarding: 0,
                intercom_user_hash:
                  'a527699b68ff90bc2132087c805314acaae18688bc35b3530d0be167aa8b4eac',
                intercom_user_hash_android:
                  '3d9ba668dfc3d67e36b2db591ddce9a4bf3f6994c7ec344ece11eb59684dfc6f',
                is_banned: 0,
                ban_reason: 0,
                is_disabled: 0,
                disabled_reason: 0,
                is_deleted: 0,
                source_of_registration: 'app.bankonnect.co',
              },
            },
            open_roles: {
              data: {
                open_roles_id: 1,
                name: 'Owner',
                permissions:
                  '{"sandbox":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}},"live":{"dashboard":1,"receivables":1,"invoices_view":1,"invoices_download":1,"invoices_create":1,"invoices_search":1,"quick_collect_view":1,"quick_collect_download":1,"quick_collect_create":1,"quick_collect_search":1,"bulk_collect_view":1,"bulk_collect_upload":1,"bulk_collect_download":1,"bulk_collect_search":1,"payables":1,"bills_view":1,"bills_create":1,"bills_download":1,"bills_pay":1,"bils_search":1,"fund_transfer_view":1,"fund_transfer_create":1,"fund_transfer_download":1,"fund_transfer_search":1,"bulk_transfer_view":1,"bulk_transfer_download":1,"bulk_transfer_upload":1,"bulk_transfer_search":1,"statements":1,"all_bank_accounts_view":1,"all_bank_accounts_link_account":1,"all_bank_accounts_apply_now":1,"all_bank_accounts_refresh_balance":1,"link_other_accounts":1,"transactions_view":1,"transactions_add_income":1,"transactions_add_expense":1,"transactions_add_manual_journal_entry":1,"cashflow":1,"profit_and_loss":1,"balance_sheet":1,"general_ledger":1,"trial_balance":1,"aged_receivables":1,"aged_payables":1,"sale_by_customer":1,"sale_by_product_or_service":1,"chart_of_accounts_view":1,"chart_of_accounts_add_account":1,"migrate_to_open":1,"contact_view":1,"contact_add":1,"contact_download":1,"contact_search":1,"manage_payroll":1,"pay_salary":1,"apps":1,"team_view":1,"team_add_member":1,"team_edit_member":1,"team_delete_member":1,"requests_view":1,"requests_approve":1,"requests_reject":1,"dashboard_menu":{"Dashboard":[],"Collect":["Receivables","Invoices","Quick Collect","Bulk Collect"],"Pay":["Payables","Bills","Fund Transfer","Bulk Transfer"],"Banking":["Statements","All Bank Accounts","Link Other Accounts"],"Accounting":["Transactions","Reports","Chart Of Accounts","Migrate To Open"],"Contact":[],"Payroll":["Manage Payroll","Pay Salary"],"Apps":[]}}}',
                description: 'Permissions for owner',
                created_at: '2022-08-30 12:42:24',
                updated_at: '2022-08-30 12:42:24',
              },
            },
          },
        },
        approver: {
          data: {
            id: 365695856,
            email: 'zemrin.pa+8968@bankopen.co',
            username: '1212132434',
            first_name: 'Zemrin',
            last_name: 'Test',
            name: 'Zemrin Test',
            initial: 'ZT',
            last_login: '2023-03-16 15:33:17',
            team_member_details: {
              data: {
                team_member_details_id: 366029305,
                emp_code: 'EMP001',
                first_name: 'Zemrin',
                last_name: 'Test',
                name: 'Zemrin Test',
                mobile_number: '1212132434',
                email_id: 'zemrin.pa+8968@bankopen.co',
                profile_image: null,
              },
            },
          },
        },
        bank_accounts: { data: [] },
        team_invite: {
          data: {
            team_invites_id: 366029305,
            request_data: {
              email_id: 'zemrin.pa+8968@bankopen.co',
              first_name: 'Zemrin',
              last_name: 'Test',
              departments_id: '',
              open_roles_id: 1,
              approver_users_id: 365695856,
              agree: true,
              full_name: 'Zemrin Test',
              users_id: 365695856,
              accounts_id: 365418059,
              companies_id: 365418059,
            },
            role_name: 'Owner',
          },
        },
      },
    ],
    meta: {
      team_count: { active_members: 1, pending_members: 1, deleted_members: 3 },
      pagination: {
        total: 2,
        count: 2,
        per_page: 12,
        current_page: 1,
        total_pages: 1,
        links: {},
      },
    },
    status: 200,
  };

  constructor(private http: HttpClient) {}
  loginApiCall(
    username: string,
    passW: string,
    token: string
  ): Observable<unknown> {
    return this.http.post('https://v2-api.bankopen.co/users/login', {
      login: username,
      password: passW,
      recaptcha: token,
    });
  }
  isLoggedIn() {
    return localStorage.getItem('userName');
  }

  TeamApiCall(): any {
    const parameters = {
      companies_id: '365418059',
      orderBy: 'created_at',
      sortedBy: 'desc',
      page: '1',
      open_roles_id_: '',
    };
    return this.http.get(
      'https://v2-api.bankopen.co/get_all_members?accounts_id=365418059&companies_id=365418059&orderBy=created_at&sortedBy=desc&page=1&open_roles_id=&department_id='
    );
  }
  addTeamMember(emailData: string | null): any {
    console.log('==========added team member');
    return this.http.post(
      'https://v2-api.bankopen.co/add_multiple_member_invite',
      {
        accounts_id: 365418059,
        companies_id: 365418059,
        email_addresses: [
          {
            email_id: emailData,
            first_name: 'aaa',
            full_name: 'aaa',
            last_name: '',
            validate: false,
          },
        ],
      }
    );
  }

  logoutApi() {
    console.log('im here++++++++');
    return this.http.post('https://v2-api.bankopen.co/users/logout', {});
  }
}
